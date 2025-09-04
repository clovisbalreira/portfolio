export function normalizarData(data) {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate());
}