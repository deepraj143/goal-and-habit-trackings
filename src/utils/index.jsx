import { format, addDays, differenceInDays, parseISO } from 'date-fns';

export const getRandomDate = (startDate, endDate) => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const diff = differenceInDays(end, start);
    const randomDays = Math.floor(Math.random() * (diff + 1));
    return format(addDays(start, randomDays), 'yyyy-MM-dd');
  };

