import Image from "next/image";
import Link from "next/link";
export default function ImagePreview({ thumbnailUrl, title }) {
  return (
    <div>
      <Link as={`/photo/${title}`} href="/photo/[id]">
        <a>
          <Image width={250} height={125} src={thumbnailUrl} />
          <div className="nasaId">Title: {title}</div>
        </a>
      </Link>
    </div>
  );
}
