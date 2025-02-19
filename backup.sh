#!/bin/bash

docker run --rm --volumes-from 7e1e7751393d -v $(pwd)/backup busybox tar cf backup/postgres-backup.tar var/lib/postgresql/data