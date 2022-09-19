// 특정 데이터의 상세 type에 대해 알수 있는 function
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}