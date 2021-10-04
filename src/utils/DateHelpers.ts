type DateArg = Date | string | number | null | undefined;

export class DateHelpers {
    public static readonly SECOND_IN_MILLISECONDS = 1000;
    public static readonly MINUTE_IN_MILLISECONDS =
        DateHelpers.SECOND_IN_MILLISECONDS * 60;
    public static readonly HOUR_IN_MILLISECONDS =
        DateHelpers.MINUTE_IN_MILLISECONDS * 60;
    public static readonly DAY_IN_MILLISECONDS =
        DateHelpers.HOUR_IN_MILLISECONDS * 24;
    public static readonly WEEK_IN_MILLISECONDS =
        DateHelpers.DAY_IN_MILLISECONDS * 7;

    public static getDate(date: DateArg = new Date()) {
        if (!date) {
            return new Date();
        } else if (date instanceof Date) {
            return date;
        }
        return date;
    }

    public static getUnix(date: DateArg = new Date()) {
        if (!date) {
            return new Date().getTime();
        } else if (date instanceof Date) {
            return date.getTime();
        }
        return new Date(date).getTime();
    }

    public static getISO(date: DateArg = new Date()) {
        if (!date) {
            return new Date().toISOString();
        }
        if (date instanceof Date) {
            return date.toISOString();
        }
        return new Date(date).toISOString();
    }

    public static subHours(hours: number = 1) {
        return new Date(this.getUnix() - this.HOUR_IN_MILLISECONDS * hours);
    }

    public static subDays(days: number = 1) {
        return new Date(this.getUnix() - this.DAY_IN_MILLISECONDS * days);
    }

    public static addMinutes(minutes: number = 1) {
        return new Date(this.getUnix() + this.MINUTE_IN_MILLISECONDS * minutes);
    }

    public static addHours(hours: number = 1) {
        return new Date(this.getUnix() + this.HOUR_IN_MILLISECONDS * hours);
    }

    public static addDays(days: number = 1) {
        return new Date(this.getUnix() + this.DAY_IN_MILLISECONDS * days);
    }
}
