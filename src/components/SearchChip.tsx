interface SearchChipProps {
  title: string;
}

const SearchChip = ({ title }: SearchChipProps) => {
  return <div className='search-chip'>{title}</div>;
};

export default SearchChip;
