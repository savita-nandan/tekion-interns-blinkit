import useFetchData from '../useFetchData';
import Image from '../atoms/Image';

function Sidebar({ handleChange }) {
  const categories = useFetchData('categories');

  return (
    <aside className="aside flex__column">
      {
        categories.map(category => (
          <section
            onClick={() => handleChange(category.id)}
            className="asideMenu flex">
            <Image styles = "asideMenu__icon" src={category.image_url} alt="" />
            <p>{category.display_text}</p>
          </section>
        ))}
    </aside>
  )
}

export default Sidebar;