// 이 파일만 고치면 됩니다. README.md의 순서를 따라 채워 주세요.
window.BOOKTOWER_CONFIG = {
  // 1) Firebase 콘솔 > 프로젝트 설정 > 내 앱 > 웹 앱의 firebaseConfig 값을 그대로 붙여넣기
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // 2) (선택) 카카오 REST API 키. 넣으면 카카오(다음) 책 검색을 씁니다.
  //    쪽수는 카카오가 알려 주지 않아서 Google Books에서 찾아보고, 없으면 직접 입력합니다.
  kakaoKey: "",
  // 3) (선택) 알라딘 TTB 키. 카카오 키가 비어 있을 때만 쓰입니다. 넣으면 한국 책 검색이 더 정확해지고 쪽수도 자동으로 채워져요.
  //    비워 두면 Google Books로 검색합니다.
  aladinKey: ""
};
