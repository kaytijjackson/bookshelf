import { HStack } from "@components";
import { CompletedBookType } from "@book-data";
import { TABLE_HEADERS } from "./const";
import { formatDate } from "@utils";
import { Divider, List, ListItem } from "./styles";
import { Fragment } from "react/jsx-runtime";

export const HistoryList = ({ history }: { history: CompletedBookType[] }) => (
  <List>
    {history.map((book, index) => (
      <Fragment key={book.id}>
        <ListItem>
          <HStack>
            <strong>{TABLE_HEADERS.Title}</strong>
            <span>{book.title}</span>
          </HStack>
          <HStack>
            <strong>{TABLE_HEADERS.Author}</strong>
            <span>{book.author}</span>
          </HStack>
          <HStack>
            <strong>{TABLE_HEADERS.Genre}</strong>
            <span>{book.genre}</span>
          </HStack>
          <HStack>
            <strong>{TABLE_HEADERS.Rating}</strong>
            <span>{book.rating}</span>
          </HStack>
          <HStack>
            <strong>{TABLE_HEADERS.Date}</strong>
            <span>{formatDate(book.endDate)}</span>
          </HStack>
        </ListItem>
        {index !== history.length - 1 && (
            <Divider />
        )}
      </Fragment>
    ))}
  </List>
);
