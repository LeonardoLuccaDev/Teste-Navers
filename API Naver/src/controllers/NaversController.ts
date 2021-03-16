import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Navers from '../models/Navers';
import Projects from '../models/Projects';
import Relation from '../models/Relation';

export default {
    //Traz todos os Navers cadastrados
    async index(request: Request, response: Response) {
        const naversRepository = getRepository(Navers);

        const navers = await naversRepository.find();

        return response.json(navers);
    },

    //Traz o Naver pelo id
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const RelationRepository = getRepository(Relation);
        const ProjectsRepository = getRepository(Projects);
        const naversRepository = getRepository(Navers);

        const relations = await RelationRepository.find({ navers_id: Number(id) });

        if (relations) {

            const Naver = await naversRepository.findOne({ id: Number(id) })

            const Projects = await Promise.all(relations.map(async ({ projects_id }) => {
                const projects = await ProjectsRepository.findOne({ id: Number(projects_id) });

                if (projects) {
                    const { id ,name } = projects;

                    return {
                        id, name
                    }
                }
            }))

            return response.json({ Naver, Projects })

        }
    },

    //Cria o Naver
    async create(request: Request, response: Response) {
        const{
            name,
            birthdate,
            admission_date,
            job_role,
            projects
        } = request.body;


        try{
        const naversRepository = getRepository(Navers);


        const naver = naversRepository.create({
            name,
            birthdate,
            admission_date,
            job_role
        });
    
       const naversSave = await naversRepository.save(naver);

       if(naversSave){
           const { id } = naversSave;

           const RelationRepository = getRepository(Relation);

           let i = 0

           for (i; i < projects.length; i++) {
            const project = RelationRepository.create({
                navers_id: id,
                projects_id: projects[i]
            });
    
            const Relation = await RelationRepository.save(project);

            console.log(Relation)
        }
   
           return response.status(201).json({sucesso: true});
       }
    
        return response.status(201).json(naver);
    } catch(e) {
        console.log(e)
    }
    }
};