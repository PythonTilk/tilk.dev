export default function Footer() {
  return (
    <>
      <footer className="max-w-4xl w-full flex flex-col mx-auto mt-16 mb-8">
        <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent">
          <p className="text-center text-lg">
            © {new Date().getFullYear()} Tilk. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
