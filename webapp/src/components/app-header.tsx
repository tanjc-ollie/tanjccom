import LinekdinContact from "./linkedin-contact";

export default function AppHeader() {
  return (
    <header>
      <div className="flex flex-row w-full p-3 items-center align-middle space-x-5">
        <h1 className="text-2xl font-semibold italic">
          Ollie Tan | Senior Software Developer
        </h1>
        <LinekdinContact rem={2}></LinekdinContact>
      </div>
    </header>
  );
}
