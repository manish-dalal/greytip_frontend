export const routeMainStack = ['/item-detail', '/profile'];

const d1 = new Date();
const month = d1.getMonth() + 1;
const dateString = `${d1.getFullYear()}-${month.toString().padStart(2, '0')}-${d1.getDate()}`;
export const api_response = [
  {
    id: 1582460208558,
    text: 'some text some text some text some text some text some text some text some text ',
    authorName: 'author-name',
    createdDate: dateString,
    keywords: 'keywords, keywords'
  },
  {
    id: 1582460208557,
    text: 'some text some text some text some text some text some text some text some text ',
    authorName: 'author-name',
    createdDate: dateString,
    keywords: 'keywords, keywords'
  },
  {
    id: 1582460208556,
    text: 'some text some text some text some text some text some text some text some text ',
    authorName: 'author-name',
    createdDate: dateString,
    keywords: 'keywords, keywords'
  },
  {
    id: 1582460208555,
    text: 'some text some text some text some text some text some text some text some text ',
    authorName: 'author-name',
    createdDate: dateString,
    keywords: 'keywords, keywords'
  }
];

export const months = [
  {
    abbreviation: 'Jan',
    name: 'January'
  },
  {
    abbreviation: 'Feb',
    name: 'February'
  },
  {
    abbreviation: 'Mar',
    name: 'March'
  },
  {
    abbreviation: 'Apr',
    name: 'April'
  },
  {
    abbreviation: 'May',
    name: 'May'
  },
  {
    abbreviation: 'Jun',
    name: 'June'
  },
  {
    abbreviation: 'Jul',
    name: 'July'
  },
  {
    abbreviation: 'Aug',
    name: 'August'
  },
  {
    abbreviation: 'Sep',
    name: 'September'
  },
  {
    abbreviation: 'Oct',
    name: 'October'
  },
  {
    abbreviation: 'Nov',
    name: 'November'
  },
  {
    abbreviation: 'Dec',
    name: 'December'
  }
];
