import Container from 'components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Francisco Moretti"
      description="Here are some of the things I've used."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Things I've used
        </h1>
        <p className="text-gray-dark dark:text-gray-light mt-2 mb-8">
          I love learning in the hands-on approach and trying technologies and features. Here are some of the things
          I've used and some references for myself and other readers. Extending this list is also a great motivation to
          continue experimenting with even more stuff.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
