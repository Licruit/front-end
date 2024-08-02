import { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { KSIC } from '@/features/Join/types/signup';
import { useFormContext } from 'react-hook-form';
import { DownArrowIcon } from 'public/assets/icons';

interface Props {
  options?: KSIC[];
  placeholder?: string;
}

function FormSelect({ options, placeholder }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const selectRef = useRef<HTMLUListElement>(null);
  const theme = useTheme();
  const { setValue } = useFormContext();

  const handleSelect = (option: KSIC) => {
    setSelectedOption(option.name);
    setIsOpen(false);
    setValue('sectorId', option.id);
  };

  const industryRef = useRef<HTMLDivElement>(null);

  const clickOutside = (event: MouseEvent) => {
    if (isOpen && !industryRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  return (
    <Wrapper ref={industryRef}>
      <Select onClick={() => setIsOpen((prev) => !prev)}>
        <div className='select_input'>
          {selectedOption ?? placeholder}
          <DownArrowIcon fill={theme.color.neutral[400]} />
        </div>
      </Select>
      {isOpen && (
        <SelectList ref={selectRef}>
          {options?.map((option) => (
            <SelectItem key={option.id} onClick={() => handleSelect(option)}>
              {option.name}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Wrapper>
  );
}

export default FormSelect;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .select_input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Select = styled.div`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
  cursor: pointer;
`;

const SelectList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.common[100]};
  color: ${({ theme }) => theme.color.neutral[300]};
  z-index: 1000;
`;

const SelectItem = styled.li`
  padding: 18px;
  ${({ theme }) => theme.typo.body.medium[12]}
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.neutral[400]};

    background-color: ${({ theme }) => theme.color.neutral[100]};
  }
`;