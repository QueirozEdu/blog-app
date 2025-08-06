import { format, formatDistanceToNow } from "date-fns";
import { enUS, pt, ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'at' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatRelativeDate(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
        locale: enUS,
        addSuffix: true,
    });
}

const rawDate = "2025-08-06T00:06:35.545Z";
console.log(rawDate);
console.log(formatDateTime(rawDate));
console.log(formatRelativeDate(rawDate));
