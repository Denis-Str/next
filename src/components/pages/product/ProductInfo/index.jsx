import style from "@/pages/product/item.module.scss";

export default function ProductInfo({setCurrentSize, item, currentSize}) {
  const handleClick = (size) => {
    if (currentSize === size) {
      setCurrentSize(0);
      return;
    }
    setCurrentSize(size);
  }

  const productInfo = item.sizes.map(({size, available}) =>
    <span
      key={size}
      className={`${style.size} ${!available && style.disabled} ${currentSize === size && style.selected}`}
      onClick={() => handleClick(size)}
    >
      {size}
  </span>);

  return (
    <>
      <span>Размеры в наличии</span> :
      <div>
        {productInfo}
      </div>
    </>
  )
}
