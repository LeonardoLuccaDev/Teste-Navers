import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Projects from '../models/Projects';
import Relation from '../models/Relation';
import Navers from '../models/Navers';

export default{

    //Traz todos os projetos cadastrados
    async index(request: Request, response: Response){
        const projectsRepository = getRepository(Projects);

        const projects = await projectsRepository.find();

        return response.json(projects);
    },

    //Traz o projeto pelo id
    async show(request: Request, response: Response){
        const { id } = request.params;

        const RelationRepository = getRepository(Relation);
        const ProjectsRepository = getRepository(Projects);
        const naversRepository = getRepository(Navers);

        const relations = await RelationRepository.find({ projects_id: Number(id) });

        if (relations) {

            const Project = await ProjectsRepository.findOne({ id: Number(id) })

            const Navers = await Promise.all(relations.map(async ({ navers_id }) => {
                const navers = await naversRepository.findOne({ id: Number(navers_id) });

                if (navers) {
                    const { name, birthdate, admission_date, job_role } = navers;

                    return {
                        name, birthdate, admission_date, job_role
                    }
                }
            }))

            return response.json({ Project, Navers })

        }
    },

    //Cria um novo projeto
    async create(request: Request, response: Response){
        const{
            name,
            navers
        } = request.body;


        try{
        const projectsRepository = getRepository(Projects);


        const project = projectsRepository.create({
            name
        });
    
       const ProjectsSave = await projectsRepository.save(project);

       if(ProjectsSave){
           const { id } = ProjectsSave;

           const RelationRepository = getRepository(Relation);

           let i = 0

           for (i; i < navers.length; i++) {
            const naver = RelationRepository.create({
                projects_id: id,
                navers_id: navers[i]
            });
    
            const Relation = await RelationRepository.save(naver);

            console.log(Relation)
        }
   
           return response.status(201).json({sucesso: true});
       }
    
        return response.status(201).json(project);
    } catch(e) {
        console.log(e)
    }
    }
};