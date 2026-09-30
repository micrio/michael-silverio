import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ICard {
  imageUrl?: string;
  imageUrls?: string[];
  cardClassName?: string;
  cardBody?: ReactNode;
  cardFooter?: ReactNode;
}

const Card = ({
  imageUrl,
  imageUrls,
  cardClassName,
  cardBody,
  cardFooter,
}: ICard) => {
  const images =
    imageUrls && imageUrls.length > 0 ? imageUrls : imageUrl ? [imageUrl] : [];
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Keep the dot row narrow even with many images by showing a window
  // of dots centered on the active image.
  const maxDots = 7;
  const dotStart = Math.max(
    0,
    Math.min(active - Math.floor(maxDots / 2), images.length - maxDots)
  );
  const dotEnd = Math.min(images.length, dotStart + maxDots);
  const visibleDots = images.slice(dotStart, dotEnd);

  const showPrev = useCallback(
    () => setActive((prev) => (prev - 1 + images.length) % images.length),
    [images.length]
  );
  const showNext = useCallback(
    () => setActive((prev) => (prev + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if (event.key === 'ArrowLeft') {
        showPrev();
      }
      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, showPrev, showNext]);

  return (
    <div
      className={clsx(
        'glass flex flex-col rounded-2xl p-4 transition-colors duration-200',
        cardClassName
      )}
    >
      {images.length > 0 && (
        <div className="group relative">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open preview fullscreen"
            className="block w-full cursor-zoom-in"
          >
            <img
              src={images[active] ?? images[0]}
              alt="project preview"
              className="mx-auto flex max-h-96 w-full justify-center rounded-xl object-cover object-top shadow-lg shadow-slate-900/10 dark:shadow-black/40"
            />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous preview"
                className="glass glass-hover absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-700 group-hover:flex dark:text-slate-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next preview"
                className="glass glass-hover absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-700 group-hover:flex dark:text-slate-200"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 left-1/2 hidden max-w-[80%] -translate-x-1/2 gap-1.5 lg:flex">
                {visibleDots.map((image, offset) => {
                  const index = dotStart + offset;
                  return (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Go to preview ${index + 1}`}
                      aria-current={index === active}
                      className={clsx(
                        'h-2 w-2 shrink-0 rounded-full transition-colors',
                        index === active
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/80'
                      )}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {cardBody && <div className="my-3">{cardBody}</div>}
      {cardFooter && <div className="mb-1 mt-4">{cardFooter}</div>}

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project preview"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close preview"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous preview"
                className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next preview"
                className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <img
            src={images[active] ?? images[0]}
            alt="project preview"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
          />

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {active + 1} / {images.length}
            </div>
          )}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Card;
