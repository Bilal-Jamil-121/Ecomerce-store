const Format = ({price}) => {
  return Intl.NumberFormat("en-PK",{
    style :"currency",
    currency:"PKR",
    maximumFractionDigits:0
  }).format(price/10)
}

export default Format