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

export const RequestsSlice = createSlice({
  name: 'requests', // 이름 정의
  initialState: {
    // 초기값 설정
    requests: [],
    isConsulting: false,
    methods: [],
    materials: [],
    filteredRequests: [], // 상담중, 체크박스 => view
  } as RequestsState,
  reducers: {
    //   state는 initialState객체와 동일
    fetchData: (state: RequestsState, action: PayloadAction<Request[]>) => {
      state.requests = action.payload;
      state.filteredRequests = action.payload;
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
