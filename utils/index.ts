export const truncate = (string: string | undefined, n: number) => {
    return string?.trim().substring(0, n) + `${n > 10 ? '...' : '' }`
}