import { X } from "lucide-react";

const ImageViewer = ({
  imageData,
  onClose,
  isImageViewerOpen,
}: {
  imageData?: { url: string; title: string };
  onClose: () => void;
  isImageViewerOpen: boolean;
}) => {
  if (!isImageViewerOpen || !imageData) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 flex flex-col">
      <div className="w-full flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        <img
          src={imageData.url}
          alt={imageData.title || "Image"}
          className="max-w-full max-h-none object-contain"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
