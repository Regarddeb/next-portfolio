import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const ImageViewer = ({
  imageData,
  onClose,
  isImageViewerOpen,
}: {
  imageData?: { url: string; title: string };
  onClose: () => void;
  isImageViewerOpen: boolean;
}) => {
  useEffect(() => {
    if (isImageViewerOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isImageViewerOpen]);

  if (!isImageViewerOpen || !imageData) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 flex flex-col z-[9999]"
      onClick={handleBackdropClick}
      // stop clicks from reaching the Sheet
      onPointerDown={(e) => e.stopPropagation()}
    >
      {/* Close button row */}
      <div className="w-full flex justify-end p-4">
        <button
          onClick={onClose} // ✅ no preventDefault or stopPropagation here
          className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
          aria-label="Close image viewer"
        >
          <X size={28} />
        </button>
      </div>

      {/* Image container */}
      <div
        className="flex flex-1 items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageData.url}
          alt={imageData.title}
          className="h-[75vh] object-contain rounded-lg shadow-lg"
          draggable={false}
        />
      </div>

      {/* Image title */}
      {imageData.title && (
        <div className="text-center p-4">
          <h3 className="text-white text-lg font-medium">{imageData.title}</h3>
        </div>
      )}
    </div>,
    document.body
  );
};

export default ImageViewer;
