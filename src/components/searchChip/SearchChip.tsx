interface SearchChipProps {
  title: string;
  onClick?: () => void;
}

const SearchChip = ({ title, onClick }: SearchChipProps) => {
  return (
    <div className='search-chip' onClick={onClick}>
      {title}
    </div>
  );
};

export default SearchChip;
