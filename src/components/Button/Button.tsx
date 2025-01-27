import React from 'react';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  $style: 'solid' | 'outlined';
  $theme: 'primary' | 'neutral';
  $width?: 'fit' | 'full';
  $size: 'sm' | 'md' | 'lg' | string;
  $transparent?: boolean;
  $disableHover?: boolean;
}

function Button({
  children,
  $style,
  $theme,
  $size,
  $width = 'fit',
  $transparent = false,
  $disableHover = false,
  ...props
}: Props) {
  return (
    <StyledButton
      $style={$style}
      $width={$width}
      $theme={$theme}
      $size={$size}
      $transparent={$transparent}
      $disableHover={$disableHover}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<Omit<Props, 'children'>>`
  ${({ theme }) => theme.typo.heading.bold[14]};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: ${({ $width }) => ($width === 'fit' ? 'fit-content' : '100%')};

  transition: all 0.08s ease-in;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ $style, theme }) =>
      $style === 'solid' ? theme.color.neutral[200] : 'none'};
    border-color: ${({ $style, theme }) =>
      $style === 'outlined' ? theme.color.neutral[400] : 'none'};
  }

  &:hover:not(:disabled) {
    ${({ $style, $theme, theme, $disableHover }) => {
      if ($disableHover) {
        return;
      }
      const hoverColor =
        $theme === 'primary'
          ? theme.color.primary[700]
          : theme.color.neutral[800];
      if ($style === 'solid') {
        return {
          backgroundColor: hoverColor,
        };
      }
      return {
        color: hoverColor,
        borderColor: hoverColor,
      };
    }}
  }

  ${({ $style, $theme, $transparent, theme }) => {
    const outlinedColor =
      $theme === 'primary'
        ? theme.color.primary[500]
        : $transparent
          ? theme.color.neutral[600]
          : theme.color.neutral[900];

    if ($style === 'solid') {
      return {
        backgroundColor:
          $theme === 'primary'
            ? theme.color.primary[500]
            : theme.color.neutral[900],
        color: theme.color.neutral[50],
      };
    }
    return {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: outlinedColor,
      color: outlinedColor,
    };
  }}

  ${({ $size }) => {
    if ($size === 'sm') {
      return {
        padding: '8.5px 16px',
        fontWeight: '600',
      };
    }
    if ($size === 'md') {
      return {
        padding: '14.5px 24px',
      };
    }
    if ($size === 'lg') {
      return {
        padding: '18.5px 24px',
      };
    }
    return {
      width: $size,
    };
  }}
`;
