export default function AppFooter() {
  return (
    <footer>
      <div className="flex justify-center items-center align-middle text-xs font-semibold antialiased w-full p-3">
        <span>
          &copy;{new Date().getFullYear()} - tanjc.com. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
