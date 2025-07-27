export interface Email {
  subject: string | undefined;
  from: string | undefined;
  to: string | undefined;
  date: Date | undefined;
  text: string | undefined;
  html: string | false | undefined;
}