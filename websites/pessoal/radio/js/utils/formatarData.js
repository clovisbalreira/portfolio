export function formatarData(data){
    return `${data.getDate() < 10 ? '0' + data.getDate() : data.getDate()} / ${data.getMonth() + 1 < 10 ? '0' + ( data.getMonth() + 1 ) : data.getMonth() + 1} / ${data.getFullYear()}`
}