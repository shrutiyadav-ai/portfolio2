import { useSyncExternalStore, useCallback, useRef, useState } from "react";
import { Camera, Check } from "lucide-react";

const KEY = "shruti-portfolio-photo";
const EVENT = "shruti-photo-change";

/* ---------- tiny external store (so hero + about stay in sync) ---------- */
const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};

const getSnapshot = (): string | null => {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

const getServerSnapshot = () => null;

export function usePinnedPhoto(): string | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function savePinnedPhoto(dataUrl: string) {
  try {
    window.localStorage.setItem(KEY, dataUrl);
  } catch {
    /* storage may be full or blocked — the photo just won't persist */
  }
  window.dispatchEvent(new Event(EVENT));
}

function clearPinnedPhoto() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}

/* ---------- resize + compress so localStorage doesn't overflow ---------- */
function fileToDataUrl(file: File, maxSide = 900): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("That doesn't look like an image."));
      img.onload = () => {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(String(reader.result));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

/* ---------- owner-only control: pin your real photo, saved on this device ---------- */
export function PinPhotoButton({ className }: { className?: string }) {
  const pinned = usePinnedPhoto();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");

  const onPick = useCallback(async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setState("error");
      return;
    }
    setState("saving");
    try {
      savePinnedPhoto(await fileToDataUrl(file));
      setState("done");
      window.setTimeout(() => setState("idle"), 2200);
    } catch {
      setState("error");
    }
  }, []);

  const reset = () => {
    clearPinnedPhoto();
    setState("idle");
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        aria-label="Choose your profile photo"
        onChange={(e) => {
          void onPick(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-1.5 border border-dashed border-ink/40 bg-paper/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70 transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-mustard hover:text-ink"
          title="Add your real photo — stored in this browser only"
        >
          {state === "done" ? <Check size={11} /> : <Camera size={11} />}
          {state === "saving" ? "saving…" : state === "done" ? "photo pinned" : pinned ? "change photo" : "pin your photo"}
        </button>
        {pinned && (
          <button
            type="button"
            onClick={reset}
            className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45 underline decoration-dotted underline-offset-2 hover:text-pink"
          >
            reset
          </button>
        )}
      </div>
      <p aria-live="polite" className="mt-1 font-mono text-[8.5px] leading-relaxed text-ink/40">
        {state === "error"
          ? "that file didn't work — try a jpg or png"
          : pinned
            ? "saved on this device · drop public/shruti.jpg to publish it"
            : "private preview: saved on this device only"}
      </p>
    </div>
  );
}
