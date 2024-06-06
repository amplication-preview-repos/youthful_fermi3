/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RatingService } from "../rating.service";
import { RatingCreateInput } from "./RatingCreateInput";
import { Rating } from "./Rating";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingUpdateInput } from "./RatingUpdateInput";

export class RatingControllerBase {
  constructor(protected readonly service: RatingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rating })
  async createRating(@common.Body() data: RatingCreateInput): Promise<Rating> {
    return await this.service.createRating({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Rating] })
  @ApiNestedQuery(RatingFindManyArgs)
  async ratings(@common.Req() request: Request): Promise<Rating[]> {
    const args = plainToClass(RatingFindManyArgs, request.query);
    return this.service.ratings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rating(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    const result = await this.service.rating({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRating(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() data: RatingUpdateInput
  ): Promise<Rating | null> {
    try {
      return await this.service.updateRating({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRating(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    try {
      return await this.service.deleteRating({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
