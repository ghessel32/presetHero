const uploadFile = ({
  accept = "image",
  onImage,
  onVideo,
}) => {
  const input = document.createElement("input");
  input.type = "file";

  input.accept =
    accept === "image"
      ? "image/*"
      : "image/*,video/*";

  input.onchange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    // IMAGE
    if (isImage && onImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }

    // VIDEO
    if (isVideo && onVideo) {
      const videoURL = URL.createObjectURL(file);
      onVideo(videoURL);
    }
  };

  input.click();
};

export default uploadFile;
