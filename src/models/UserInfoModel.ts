export class UserInfoModel {
  location: string;
  membershipDuration: string;
  education: string[];
  languages: string[];
  certificates: string[];

  constructor({
    location = 'Не указано',
    createdAt = new Date(),
    education = ['Не указано'],
    languages = ['Не указано'],
    certificates = ['Нет сертификатов'],
  }: {
    location?: string;
    createdAt?: Date;
    education?: string[];
    languages?: string[];
    certificates?: string[];
  }) {
    this.location = location;
    this.membershipDuration = this.calculateMembership(createdAt);
    this.education = education;
    this.languages = languages;
    this.certificates = certificates;
  }

  private calculateMembership(date: Date): string {
    const now = new Date();
    const years = now.getFullYear() - new Date(date).getFullYear();
    return `${years} ${this.pluralize(years, ['год', 'года', 'лет'])}`;
  }

  private pluralize(n: number, forms: [string, string, string]): string {
    return n % 10 === 1 && n % 100 !== 11
      ? forms[0]
      : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)
        ? forms[1]
        : forms[2];
  }
}
