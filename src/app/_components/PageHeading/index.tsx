export default function PageHeading({ title }: { title: string }) {
  return (
    <section>
      <h1 className="font-teko text-6xl p-16 pt-0 text-center font-bold">
        {title}
      </h1>
    </section>
  );
}
