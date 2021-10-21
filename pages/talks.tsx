import Container from 'components/Container';
import YoutubePlaylistFull from 'components/YoutubePlaylistFull';

export default function SoftwareTalks() {
  return (
    <Container
      title="Software Talks – Francisco Moretti"
      description="List of the my favourite conference sessions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Software Talks
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is the list of my favourites softawre talks.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <YoutubePlaylistFull />
        </div>
      </div>
    </Container>
  );
}
