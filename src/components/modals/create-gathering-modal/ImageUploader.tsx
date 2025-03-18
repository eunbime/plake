import { Button } from "@/components/ui/Button";

interface ImageUploaderProps {
  setValue: (value: string) => void;
  value: string;
}

const ImageUploader = ({ setValue, value }: ImageUploaderProps) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setValue(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const imageDescription = value ? value : "이미지를 첨부해주세요.";

  return (
    <div className="flex items-center gap-3">
      <div className="flex w-full items-center overflow-auto rounded-2xl bg-gray-50 px-4 py-[10px]">
        <p className="line-clamp-1 font-medium text-gray-400">
          {imageDescription}
        </p>
      </div>
      <input
        type="file"
        className="hidden"
        id="image-file"
        onChange={handleImageChange}
      />
      <Button
        variant="purple-outline"
        onClick={() => document.getElementById("image-file")?.click()}
      >
        파일 찾기
      </Button>
    </div>
  );
};

export default ImageUploader;
