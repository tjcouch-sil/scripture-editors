import { useEffect, useState } from "react";
import { BookStore, getBookHandler } from "shared/contentManager/index";
import { fetchUsfm } from "shared/contentManager/mockup/fetchUsfm";

export function useBibleBook({
  serverName,
  organizationId,
  languageCode,
  versionId,
  bookCode,
}: {
  serverName: string;
  organizationId: string;
  languageCode: string;
  versionId: string;
  bookCode: string;
}) {
  const [bookHandler, setBookHandler] = useState<BookStore | null>(null);

  useEffect(() => {
    async function updateBookHandler() {
      const usfm = await fetchUsfm({
        serverName,
        organizationId,
        languageCode,
        versionId,
        bookCode,
      });
      setBookHandler(
        await getBookHandler({
          usfm,
          serverName,
          organizationId,
          languageCode,
          versionId,
          bookCode,
        }),
      );
    }
    updateBookHandler();
  }, [serverName, organizationId, languageCode, versionId, bookCode]);

  return bookHandler;
}
