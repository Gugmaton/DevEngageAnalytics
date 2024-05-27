interface ContentProps {
  params: {
    slug: string;
  };
}

export default function Content({ params }: ContentProps) {
  return (
    <main>
      <p>{params.slug}</p>
    </main>
  );
}
