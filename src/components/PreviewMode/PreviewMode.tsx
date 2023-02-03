import { previewData } from "next/headers";

const PreviewMode: React.FC = ({}) => {
  if (!previewData()) {
    return null;
  }

  return (
    <div className="z-99 container relative mb-4">
      <div className="bg-primary/90 p-4 text-white">
        Currently in preview mode.
      </div>
    </div>
  );
};

export default PreviewMode;
