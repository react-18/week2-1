/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 상태 -> 액션 -> 리듀서

export interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

interface RequestsState {
  requests: Request[];
  isConsulting: boolean;
  methods: string[];
  materials: string[];
  filteredRequests: Request[];
}

function filterRequests({
  requests,
  isConsulting,
  methods,
  materials,
}: Omit<RequestsState, 'filteredRequests'>): Request[] {
  if (isConsulting) {
    requests = requests.filter(
      (request: Request) => request.status === '상담중',
    );
  }

  if (methods.length === 0 && materials.length === 0) return requests;

  // methods 체크 시 filter
  if (methods.length) {
    methods.forEach((item: string) => {
      requests = requests.filter((request) => request.method.includes(item));
    });
  }

  // materials 체크 시 filter
  if (materials.length) {
    materials.forEach((item: string) => {
      requests = requests.filter((request) => request.material.includes(item));
    });
  }
  return requests;
}

const payload = [
  {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  },
  {
    id: 2,
    title: '비행기 시제품 제작',
    client: 'B 고객사',
    due: '2020.12.13',
    count: 2,
    amount: 100,
    method: ['선반'],
    material: ['탄소강', '강철'],
    status: '상담중',
  },
  {
    id: 3,
    title: '기차 시제품 제작',
    client: 'C 고객사',
    due: '2020.12.12',
    count: 1,
    amount: 20,
    method: ['선반'],
    material: ['구리'],
    status: '대기중',
  },
  {
    id: 4,
    title: '자전거 시제품 제작',
    client: 'D 고객사',
    due: '2020.12.11',
    count: 1,
    amount: 45,
    method: ['선반'],
    material: ['스테인리스강'],
    status: '대기중',
  },
  {
    id: 5,
    title: '헬리콥터 시제품 제작',
    client: 'E 업체',
    due: '2020.12.10',
    count: 2,
    amount: 2,
    method: ['밀링'],
    material: ['알루미늄', '탄소강'],
    status: '대기중',
  },
  {
    id: 6,
    title: '전동 킥보드 시제품 제작',
    client: 'F 업체',
    due: '2020.12.09',
    docs: 1,
    amount: 20,
    method: ['밀링'],
    material: ['강철'],
    status: '대기중',
  },
];

export const RequestsSlice = createSlice({
  name: 'requests', // 이름 정의
  initialState: {
    // 초기값 설정
    requests: payload,
    isConsulting: false,
    methods: [],
    materials: [],
    filteredRequests: payload, // 상담중, 체크박스 => view
  } as RequestsState,
  reducers: {
    //   state는 initialState객체와 동일
    fetchData: (state: RequestsState, action: PayloadAction<RequestsState>) => {
      state = action.payload;
    },
    filterStatus: (state: RequestsState) => {
      state.isConsulting = !state.isConsulting;
      state.filteredRequests = filterRequests(state);
    },
    filterMethod: (state: RequestsState, action: PayloadAction<string[]>) => {
      state.methods = action.payload;
      state.filteredRequests = filterRequests(state);
    },
    filterMaterial: (state: RequestsState, action: PayloadAction<string[]>) => {
      state.materials = action.payload;
      state.filteredRequests = filterRequests(state);
    },
  },
});

export const { fetchData, filterStatus, filterMethod, filterMaterial } =
  RequestsSlice.actions;

export default RequestsSlice.reducer;
