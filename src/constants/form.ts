interface FormData {
  [key: number]: {
    title: string;
    description: string;
  };
}

export const FORM: {
  [key: string]: FormData;
} = {
  login: {
    1: {
      title: '당신의 취향에 맞는 주류를 함께',
      description: `로그인하여 맞춤형 주류 공동구매와 전통주 백과사전 같은 카탈로그 기능을 즐기세요.\n원하는 주류를 더 저렴하게 구매하고 다양한 혜택을 누려보세요`,
    },
  },
  find_password: {
    1: {
      title: '비밀번호를 분실하셨나요?',
      description: `걱정하지 마세요! 아래에 등록된 전화번호를 입력하시면\n비밀번호를 재설정할 수 있습니다.`,
    },
    2: {
      title: '인증완료',
      description: `인증이 완료되었습니다!\n이제 새로운 비밀번호를 설정해주세요.`,
    },
  },
  signUp: {
    1: {
      title: '간편가입',
      description: `주류 구매를 위해 약관에\n동의하고 성인 인증을 완료해 주세요!`,
    },
    2: {
      title: '간편가입',
      description: `다음으로, 휴대폰 본인 인증을 진행해 주세요.\n아래의 정보를 입력해 본인 인증을 완료해 주세요.`,
    },
    3: {
      title: '간편가입',
      description: `로그인에 필요한 사업자등록 번호 및 비밀번호를 입력해주세요`,
    },
    4: {
      title: '간편가입',
      description: `현재 운영하시는 업종 카테고리를 선택해 주세요!\n(1가지 업종만 선택해주세요)`,
    },
    5: {
      title: '가입완료!',
      description: `환영합니다! 리쿠르트와 함께하는 주류 공동 구매의 즐거움!\n지금부터 다양한 주류를 저렴하게 만나보세요!`,
    },
  },
} as const;
