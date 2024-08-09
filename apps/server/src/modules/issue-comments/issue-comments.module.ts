import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'nestjs-prisma';

import { IssuesModule } from 'modules/issues/issues.module';
import { NotificationsModule } from 'modules/notifications/notifications.module';

import { IssueCommentsController } from './issue-comments.controller';
import IssueCommentsService from './issue-comments.service';

@Module({
  imports: [PrismaModule, HttpModule, NotificationsModule, IssuesModule],
  controllers: [IssueCommentsController],
  providers: [IssueCommentsService, PrismaService],
  exports: [IssueCommentsService],
})
export class IssueCommentsModule {}
