import LoadingSpinnerIcon from '@/assets/svg/loader.svg';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <LoadingSpinnerIcon className="text-gray-300 w-6 h-6" />
    </div>
  );
}