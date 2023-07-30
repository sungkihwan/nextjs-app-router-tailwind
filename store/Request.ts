import {atom, selector} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export class Request {
    email?: string;
    name?: string;
    phone?: string;
    kakao_id?: number;
}

export const requestState = atom<Request>({
    key: 'request',
    default: new Request(),
    effects_UNSTABLE: [persistAtom],
});

