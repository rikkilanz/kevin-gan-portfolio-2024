export default function ItemWrapper({ children }: { children: any }) {
  return (
    <>
      <div className="bg-main-500 border-2 border-black text-white p-8 relative text-sm">
        <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
        {children}
      </div>
    </>
  );
}
