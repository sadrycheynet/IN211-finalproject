/**@constant SERVER_URL Server url */
export const SERVER_URL = "localhost:3000/";

/** @typedef AllowedLang Language available on the website. */
export type AllowedLang = "en" | "fr";

/**
 * @interface INavbarLangSet Interface describing how the content of a navbar is
 * stored.
 */
export interface INavbarLangSet{
    home:string,
    resume:string,
    portfolio:string,
    contact:string
}

/**
 * @interface ILangSet Interface describing the structure of data presented on
 * the website for each language.
 */
export interface ILangSet {
    "navbar":INavbarLangSet
}

/**
 * @interface ILang Interface describing the diverse sets of language available
 * on the website.
 */
export interface ILang {
    "en":ILangSet,
    "fr":ILangSet
}

export const LANGS:ILang = {
    "en":{
        "navbar":{
            home:"Home",
            resume:"My resume",
            portfolio:"My portfolio",
            contact:"Contact me"
        }
    },
    "fr":{
        "navbar":{
            home:"Accueil",
            resume:"CV",
            portfolio:"Portfolio",
            contact:"Contact"
        }
    }
}