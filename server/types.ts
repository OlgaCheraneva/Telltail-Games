import {Achievement} from 'models/Achievement';
import {Action} from 'models/Action';
import {Adventure} from 'models/Adventure';
import {Hashtag} from 'models/Hashtag';
import {Scene} from 'models/Scene';

export interface IAdventureData {
    id: number;
    title: string;
    description: string;
    hasImage: boolean;
    hashtags: IHashtagData[];
    scenes: ISceneData[];
    openingSceneId: number | null;
    users: IUserData[];
}

export interface ICompletionData {
    adventureId: number;
    userId: number;
    count: number;
}

export interface IUserData {
    avatar: string;
    id: number;
    login: string;
}

export interface IUserDataWithCompletionCount {
    avatar: string;
    id: number;
    login: string;
    count: number;
}

export interface IUserRegistrationData {
    avatar: string;
    login: string;
    password: string;
}

export interface IUserLoginData {
    login: string;
    password: string;
}

export interface IHashtagData {
    id: number;
    name: string;
    addressName: string;
    adventures: IAdventureData[];
}

export interface ISceneData {
    id: number;
    description?: string;
    descriptionLocation: string;
    hasImage: boolean;
    isOpening: boolean;
    imageDescription: string;
    adventure: IAdventureData;
    adventureId: number;
    actions: IActionData[];
    achievements: IAchievementData[];
}

export interface IActionData {
    id: number;
    name: string;
    nextSceneId: number;
    sceneId: number;
    scene: ISceneData;
}

export interface IAchievementData {
    id: number;
    name: string;
    imageDescription: string;
    scenes: ISceneData[];
}

export interface IPageMeta {
    charset: string;
    description?: string;
}

export interface IPageData {
    meta?: IPageMeta;
    title?: string;
    staticBasePath?: string;
    adventures?: Adventure[];
    adventure?: Adventure;
    hashtag?: Hashtag;
    scene?: Scene;
    achievements?: Achievement[];
    actions?: Action[];
    openingSceneId?: number;
}
