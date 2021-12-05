import { authenticate } from '@loopback/authentication';
import { authorize } from '@loopback/authorization';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import { basicAuthorization } from '../middlewares/auth.midd';
import {
  Departamento,
  Ciudad,
} from '../models';
import {DepartamentoRepository} from '../repositories';

export class DepartamentoCiudadController {
  constructor(
    @repository(DepartamentoRepository) protected departamentoRepository: DepartamentoRepository,
  ) { }

  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin', 'Adviser','Client','User'],
    voters: [basicAuthorization],
  })

  @get('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Array of Departamento has many Ciudad',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ciudad)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Ciudad>,
  ): Promise<Ciudad[]> {
    return this.departamentoRepository.ciudades(id).find(filter);
  }

  @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin'],
    voters: [basicAuthorization],
  })

  @post('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ciudad)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Departamento.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ciudad, {
            title: 'NewCiudadInDepartamento',
            exclude: ['id'],
            optional: ['departamentoId']
          }),
        },
      },
    }) ciudad: Omit<Ciudad, 'id'>,
  ): Promise<Ciudad> {
    return this.departamentoRepository.ciudades(id).create(ciudad);
  }

  @patch('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento.Ciudad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ciudad, {partial: true}),
        },
      },
    })
    ciudad: Partial<Ciudad>,
    @param.query.object('where', getWhereSchemaFor(Ciudad)) where?: Where<Ciudad>,
  ): Promise<Count> {
    return this.departamentoRepository.ciudades(id).patch(ciudad, where);
  }

  @del('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento.Ciudad DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Ciudad)) where?: Where<Ciudad>,
  ): Promise<Count> {
    return this.departamentoRepository.ciudades(id).delete(where);
  }
}