import ImagePreview from "./components/Modal";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel w-200">
          <ImagePreview imagePath="/images/landing.jpg" />
        </div>
      </div>
    </main>
  );
}
