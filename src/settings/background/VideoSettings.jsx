import { Upload } from "lucide-react";
import { usebgstyleStore } from "../../store/bgstyleStore";
import handleUploadClick from "../../utils/Upload";

function VideoSettings() {
  const { bgstyles, updateBGStyle } = usebgstyleStore();
  const bgVideo = bgstyles.bgVideo;

  const handleVideoUpload = () => {
    handleUploadClick({
      accept: "video",
      onVideo: (videoURL) => {
        updateBGStyle("bgstyles", { bgVideo: videoURL });
      },
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
        <div className="flex items-center justify-center">
          {bgVideo && (
            <video
              key={bgVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-fit h-full"
            >
              <source src={bgVideo} />
            </video>
          )}
        </div>
      </div>

      <button
        onClick={handleVideoUpload}
        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium my-2 mx-auto"
      >
        <Upload size={20} />
        Upload
      </button>
    </div>
  );
}

function VideoComponent() {
  const bgVideo = usebgstyleStore((state) => state.bgstyles.bgVideo);

  return (
    <div>
      <video
        key={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Optional dark overlay for text readability
      <div className="absolute inset-0 z-1 bg-black/40" /> */}
    </div>
  );
}

export { VideoSettings, VideoComponent };
