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
 * @interface IHomeLangSet Interface describing how the content of homepage is
 * stored.
 */
export interface IHomeLangSet{
    aside:{
        img_alt:string,
        studies:string,
        specialty:string,
        age:string,
        hobbies:{guitar:string, writing:string, boardgames:string}
    },
    section:{
        welcome:string,
        description:{title:string, studies:string,languages:string,personal:string},
        projects:{
            title:string,description:string,
            carousel:{
                more_about:string,
                left_slide:{img_alt:string,title:string,date:string,description:string},
                center_slide:{img_alt:string,title:string,date:string,description:string},
                right_slide:{img_alt:string,title:string,date:string,description:string}
            }
        }
    }
}

/**
 * @interface ILangSet Interface describing the structure of data presented on
 * the website for each language.
 */
export interface ILangSet {
    "navbar":INavbarLangSet,
    "home":IHomeLangSet
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
        },
        "home":{
            aside:{
                img_alt:"Professional photo of Sadry CHEYNET-SOUBOU",
                studies:"Etudiant en ingénierie",
                specialty:"Architecture &amp; sécurité des systèmes complexes",
                age:"21 ans",
                hobbies:{guitar:"Guitariste amateur,",writing:"Ecriture de nouvelles",boardgames:"Création de jeux de société"}
            },
            section:{
                welcome:"Bienvenue sur mon site-web",
                description:{
                    title:"Mon parcours", studies:"Etudiant-ingénieur originaire de la Réunion, après une formation en <em>Classes Préparatoires aux Grandes Ecoles</em>, je poursuis actuellement des études en <em>Architecture et sécurité des systèmes complexes</em> à l'<em>Ecole Nationale Supérieure de Techniques Avancées</em> (ENSTA Paris), où je me forme notamment à la cybersécurité et au développement de logiciels et de divers systèmes.",
                    languages:"Etudiant-ingénieur originaire de la Réunion, après une formation en <em>Classes Préparatoires aux Grandes Ecoles</em>, je poursuis actuellement des études en <em>Architecture et sécurité des systèmes complexes</em> à l'<em>Ecole Nationale Supérieure de Techniques Avancées</em> (ENSTA Paris), où je me forme notamment à la cybersécurité et au développement de logiciels et de divers systèmes.",
                    personal:"Je consacre également une partie de mon temps à l'apprentissage de la guitare et du chant à la <em>Maison des Sons</em>, à Paris, et aux représentations dans les bars et les cafés de la capitale."},
                projects:{
                    title:"Mes derniers projets",
                    description:"Je travaille actuellement sur un projet de plateforme virtuelle destinée à l'apprentissage linguistique et scientifique, à la fois sous une forme académique et ludique. Si vous travaillez dans l'enseignement secondaire et que le projet vous intéresse, n'hésitez pas à <a href='./contact.html'>me contacter.",
                    carousel:{
                        more_about:"More about",
                        left_slide:{
                            img_alt:"Random photo",
                            title:"Plateforme d'apprentissage ludique (en cours)",
                            date:"Depuis Mars 2020",
                            description:"Mise en place d'une plateforme d'apprentissage virtuelle permettant d'accompagner l'autoformation aux langues, aux sciences et à la création."},
                        center_slide:{
                            img_alt:"Random photo",
                            title:"Prototype d'un jeu de plateau de gestion (en cours)",
                            date:"Depuis Septembre 2019",
                            description:"Conception d'un jeu de plateau portant sur la gestion d'une communauté autnome. Je réalise ce projet avec une graphiste talentueuse."},
                        right_slide:{
                            img_alt:"Random photo",
                            title:"Application de suivi d'entraînement sous la demande de la FFCK (JO 2024)",
                            date:"Septembre 2019 - Mars 2020",
                            description:"Réalisation d'une site application permettant de faciliter le suivi de l'entraînement d'athlètes en préparation pour les Jeux Olympiques de 2024.<br> Cette année a été consacrée à l'étude de faisabilité d'un tel projet, projet réalisé pour la <em>Fédération Française de Canoë-Kayak</em>."}
                    }
                }
            }
        }
    },
    "fr":{
        "navbar":{
            home:"Accueil",
            resume:"CV",
            portfolio:"Portfolio",
            contact:"Contact"
        },
        "home":{
            aside:{
                img_alt:"Photo de Sadry CHEYNET-SOUBOU, assis, et portant des lunettes de soleil",
                studies:"Etudiant en ingénierie",
                specialty:"Architecture & sécurité des systèmes complexes",
                age:"21 ans",
                hobbies:{guitar:"Guitariste amateur",writing:"Ecriture de nouvelles",boardgames:"Création de jeux de société"}
            },
            section:{
                welcome:"Bienvenue sur mon site-web",
                description:{
                    title:"Mon parcours", studies:"Etudiant-ingénieur originaire de la Réunion, après une formation en <em>Classes Préparatoires aux Grandes Ecoles</em>, je poursuis actuellement des études en <em>Architecture et sécurité des systèmes complexes</em> à l'<em>Ecole Nationale Supérieure de Techniques Avancées</em> (ENSTA Paris), où je me forme notamment à la cybersécurité et au développement de logiciels et de divers systèmes.",
                    languages:"En parallèle de ces études, je me forme également en autonomie à l'apprentissage linguistique ; c'est ainsi que j'ai pu rapidement acquérir des bases en japonais, en italien et en néerlandais.",
                    personal:"Je consacre également une partie de mon temps à l'apprentissage de la guitare et du chant à la <em>Maison des Sons</em>, à Paris, et aux représentations dans les bars et les cafés de la capitale."},
                projects:{
                    title:"Mes derniers projets",
                    description:"Je travaille actuellement sur un projet de plateforme virtuelle destinée à l'apprentissage linguistique et scientifique, à la fois sous une forme académique et ludique. Si vous travaillez dans l'enseignement secondaire et que le projet vous intéresse, n'hésitez pas à <a href='./contact.html'>me contacter.",
                    carousel:{
                        more_about:"En savoir plus",
                        left_slide:{
                            img_alt:"Random photo",
                            title:"Plateforme d'apprentissage ludique (en cours)",
                            date:"Depuis Mars 2020",
                            description:"Mise en place d'une plateforme d'apprentissage virtuelle permettant d'accompagner l'autoformation aux langues, aux sciences et à la création."},
                        center_slide:{
                            img_alt:"Random photo",
                            title:"Prototype d'un jeu de plateau de gestion (en cours)",
                            date:"Depuis Septembre 2019",
                            description:"Conception d'un jeu de plateau portant sur la gestion d'une communauté autnome. Je réalise ce projet avec une graphiste talentueuse."},
                        right_slide:{
                            img_alt:"Random photo",
                            title:"Application de suivi d'entraînement sous la demande de la FFCK (JO 2024)",
                            date:"Septembre 2019 - Mars 2020",
                            description:"Réalisation d'une site application permettant de faciliter le suivi de l'entraînement d'athlètes en préparation pour les Jeux Olympiques de 2024.<br> Cette année a été consacrée à l'étude de faisabilité d'un tel projet, projet réalisé pour la <em>Fédération Française de Canoë-Kayak</em>."}
                    }
                }
            }
        }
    }
}