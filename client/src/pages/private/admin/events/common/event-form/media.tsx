import { Upload, Button } from "antd";
import type { EventFormStepProps } from ".";

function Media({ currentStep, setCurrentStep, selectedMediaFiles, setSelectedMediaFiles }: EventFormStepProps) {

    const onSelectMediaremove = (index: number) => {
        const existingsekectedMediaFiles = [...selectedMediaFiles];
        const newSelectedMediaFiles = existingsekectedMediaFiles.filter((_, idx) => idx !== index);
        setSelectedMediaFiles(newSelectedMediaFiles);
    };

    return (
        <div>
            <Upload
                listType="picture-card"
                beforeUpload={(file) => {
                    setSelectedMediaFiles((prev: any) => [...prev, file]);
                    return false; // Prevent auto upload
                }}
                multiple
                showUploadList={false}
            >
                <div className="text-gray-500 text-xs">
                    Click here to Upload
                </div>
            </Upload>

            <div className="flex flex-wrap gap-5 mt-4">
                {selectedMediaFiles.map((file: any, idx: number) => (
                    <div key={idx} className="border p-3 flex flex-col items-center">
                        <img
                            src={URL.createObjectURL(file instanceof File ? file : file.originFileObj)}
                            alt="media"
                            className="w-32 h-32 object-cover rounded"
                        />
                        <span
                            className="underline text-sm text-center cursor-pointer"
                            onClick={() => onSelectMediaremove(idx)}
                        >
                            remove
                        </span>
                    </div>
                ))}
            </div>

            {/* Back & Next buttons */}
            <div className="flex justify-between mt-6">
                <Button onClick={() => setCurrentStep(currentStep - 1)}>
                    Back
                </Button>
                <Button
                    type="primary"
                    onClick={() => setCurrentStep(currentStep + 1)}
                   
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Media;
